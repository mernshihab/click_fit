exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No File Found" });
    }

    const file = `/upload_images/${req.file.filename}`;

    return res.status(200).json({
      success: true,
      message: "Image upload successfully.",
      imagePath: file,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
