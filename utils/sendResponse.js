const sendResponse = (req, res, statusCode, mimeType, payload) => {
    res.statusCode = statusCode
    res.setHeader("Content-Type", mimeType)
    res.end(payload)
}

export { sendResponse }
