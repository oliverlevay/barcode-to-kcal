// pages/api/upload.js
import formidable from "formidable";
import cloudinary from "cloudinary";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next/types";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error parsing the files" });
        return;
      }
      if (!files.file) {
        res.status(500).json({ error: "No file uploaded" });
        return;
      }
      const file = files.file[0].filepath;

      cloudinary.v2.uploader.upload(
        file,
        {
          width: 500,
          height: 500,
          crop: "limit",
        },
        (error, result) => {
          if (error) {
            res.status(500).json({ error: "Error uploading to Cloudinary" });
            return;
          }

          // Remove the file from the server after uploading
          fs.unlinkSync(file);

          if (!result)
            return res
              .status(500)
              .json({ error: "Error uploading to Cloudinary" });

          res.status(200).json({
            message: "File uploaded successfully",
            url: result.secure_url,
          });
        }
      );
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
