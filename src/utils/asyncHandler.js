// This function is used to handle the data which is asynchronous in nature.

const asyncHandler = (requestHandler) =>{

    return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) =>  next(err));
    }
}

export {asyncHandler};
