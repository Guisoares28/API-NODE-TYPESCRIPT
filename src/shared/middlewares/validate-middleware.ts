import { NextFunction, Request, RequestHandler, Response } from "express";
import * as yup from "yup";

export const validateSchema = (field: 'body' | 'header' | 'params' | 'query',schema:yup.Schema): RequestHandler => {
    return async (req:Request, res:Response, next:NextFunction) =>{
        try {
            await schema.validate(req[field],{
            abortEarly:false,
            stripUnknown: true
            });

            return next();

        } catch (error) {
            if (error instanceof yup.ValidationError) {
                // Formata os erros de validação
                const errors = error.inner.map((err) => ({
                    path: err.path,
                    message: err.message,
                }));

                return res.status(400).json({
                    error: "Erro de validação",
                    details: errors,
                });
            }
        }
    }
}




