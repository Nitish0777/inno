const uploadDocumentation = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error In Uploading Doument",
      error: error.message,
    });
  }
};

export { uploadDocumentation };
