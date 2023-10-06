const uploadDocumentation = async (req, res) => {
  try {
    let filesUrl = null;

    if (req.files) {
      filesUrl = req.files.map((file) => {
        return file.path;
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error In Uploading Doument",
      error: error.message,
    });
  }
};

export { uploadDocumentation };
