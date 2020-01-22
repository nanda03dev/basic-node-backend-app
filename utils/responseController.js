var HttpStatus=require('http-status');

exports.sendSuccess=function (res,data){
    res.status(HttpStatus.OK).json({
        status:'success',
        code: HttpStatus.OK,
        data:data
    });
    return;
}
exports.sendInternalError=function (res,data){
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status:'failure',
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        error:data
    });
    return;
}
exports.sendNotFound=function (res,data){
    res.status(HttpStatus.NOT_FOUND).json({
        status:'failure',
        code: HttpStatus.NOT_FOUND,
        error:data
    });
    return;
}
exports.sendBadRequest=function (res,data){
    res.status(HttpStatus.BAD_REQUEST).json({
        status:'failure',
        code: HttpStatus.BAD_REQUEST,
        error:data
    });
    return;
}