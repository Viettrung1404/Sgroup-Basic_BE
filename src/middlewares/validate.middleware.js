import Joi from "joi";

export class ValidateMiddleware {
  static validateId = async (req, res, next) => {
    try {
      const schema = Joi.object({
        id: Joi.string() 
          .hex() 
          .length(24)
          .required()
          .messages({
            "string.int": "ID phải là số nguyên hợp lệ",
            "string.length": "ID phải có đúng 24 ký tự",
            "any.required": "ID là bắt buộc"
          })
      });

      await schema.validateAsync(req.params);
      next();
    } catch (error) {
      const errors = error.details.map((err) => ({
        field: err.context.key,
        message: err.message
      }));
      return res.status(400).json({ errors });
    }
  };

  // Validate dữ liệu khi tạo user mới
  static validateCreateUser = async (req, res, next) => {
    try {
      const schema = Joi.object({
        // name: Joi.string()
        //   .min(3)
        //   .max(30)
        //   .required()
        //   .pattern(/^[a-zA-Z\s]+$/)
        //   .messages({
        //     "string.min": "Tên phải có ít nhất 3 ký tự",
        //     "string.max": "Tên không quá 30 ký tự",
        //     "string.pattern.base": "Tên chỉ chứa chữ cái và khoảng trắng",
        //     "any.required": "Tên là bắt buộc"
        //   }),
        password: Joi.string()
          .min(8)
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
          .required()
          .messages({
            "string.min": "Mật khẩu phải có ít nhất 8 ký tự",
            "string.pattern.base":
              "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số",
            "any.required": "Mật khẩu là bắt buộc"
          }),

        email: Joi.string()
          .email()
          .required()
          .messages({
            "string.email": "Email không hợp lệ",
            "any.required": "Email là bắt buộc"
          })
      });

      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const errors = error.details.map((err) => ({
        field: err.context.key,
        message: err.message
      }));
      return res.status(400).json({ errors });
    }
  };

  // Validate dữ liệu khi cập nhật user
  static validateUpdateUser = async (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string()
          .min(3)
          .max(30)
          .pattern(/^[a-zA-Z\s]+$/),

        password: Joi.string()
          .min(8)
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),

        email: Joi.string().email()
      }).min(1);

      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const errors = error.details.map((err) => ({
        field: err.context.key,
        message: err.message
      }));
      return res.status(400).json({ errors });
    }
  };
}