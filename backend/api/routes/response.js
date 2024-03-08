const response = (statusCode, usd, idr, message, res) => {
    res.status(statusCode).json([
        {
            payload: {
                status: statusCode,
                data : {
                    usd: usd,
                    idr: idr,
                },
                message,
            },
        },
    ]);
}

export default response