import Joi from "joi";

export class ValidateMiddleware {
  // Middleware để xác thực ID
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

  // Middleware để xác thực dữ liệu khi đăng ký người dùng
  static validateEmail = async (req, res, next) => {
    try {
      const schema = Joi.object({
        email: Joi.string()
          .email()
          .required()
          .messages({
            "string.email": "Email không hợp lệ",
            "any.required": "Email là bắt buộc"
          })
      });

      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const errors = error.details.map((err) => ({
        field: err.context.key,
        message: err.message
      }));
      return res.status(400).json({ errors });
    }
  }

  // Middleware để xác thực dữ liệu khi reset mật khẩu
  static validateResetPassword = async (req, res, next) => {
    try {
      const schema = Joi.object({
        email: Joi.string()
          .email()
          .required()
          .messages({
            "string.email": "Email không hợp lệ",
            "any.required": "Email là bắt buộc"
          }),
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
        token: Joi.string()
          .required()
          .messages({
            "any.required": "Token là bắt buộc"
          })
      });

      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      const errors = error.details.map((err) => ({
        field: err.context.key,
        message: err.message
      }));
      return res.status(400).json({ errors });
    }
  }

  // Middleware để xác thực người dùng có quyền admin
  static validateAdmin = async (req, res, next) => {
    try {
      // Kiểm tra trực tiếp req.user.isAdmin
      if (!req.user || !req.user.role || req.user.role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to perform this action",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error validating admin role",
        error: error.message
      });
    }
  };

  static validateUser = async (req, res, next) => {
    try {
      // Kiểm tra trực tiếp req.user.isAdmin
      if (!req.user || !req.user.role || req.user.role !== "user") {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to perform this action",
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error validating user role",
        error: error.message
      });
    }
  };

  // Validate dữ liệu khi tạo user mới
  static validateCreateUser = async (req, res, next) => {
    try {
      const schema = Joi.object({
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

  // Validate cho api polls
  static validateCreatePoll = async (req, res, next) => {
    try {
      const schema = Joi.object({
        title: Joi.string()
          .min(3)
          .max(100)
          .required()
          .messages({
            "string.min": "Tiêu đề phải có ít nhất 3 ký tự",
            "string.max": "Tiêu đề không quá 100 ký tự",
            "any.required": "Tiêu đề là bắt buộc"
          }),
        description: Joi.string()
          .max(500)
          .optional(),
        options: Joi.array()
          .items(
            Joi.string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })
          )
          .min(2)
          .required()
          .messages({
            "array.min": "Cần ít nhất 2 lựa chọn",
            "any.required": "Lựa chọn là bắt buộc"
          }),
        expiresAt: Joi.date().optional(),
        isLocked: Joi.boolean()
          .optional()
          .messages({
            "boolean.base": "Trạng thái khóa phải là true hoặc false"
          }),
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
  static validateUpdatePoll = async (req, res, next) => {
    try {
      const schema = Joi.object({
        title: Joi.string()
          .min(3)
          .max(100)
          .optional()
          .messages({
            "string.min": "Tiêu đề phải có ít nhất 3 ký tự",
            "string.max": "Tiêu đề không quá 100 ký tự"
          }),
        description: Joi.string()
          .max(500)
          .optional(),
        options: Joi.array()
          .items(
            Joi.string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })
          )
          .min(2)
          .optional()
          .messages({
            "array.min": "Cần ít nhất 2 lựa chọn"
          }),
        expiresAt: Joi.date().optional()
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
  static validateVotePoll = async (req, res, next) => {
    try {
      const schema = Joi.object({
        optionId: Joi.string()
          .hex()
          .length(24)
          .required()
          .messages({
            "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
            "string.length": "ID lựa chọn phải có đúng 24 ký tự",
            "any.required": "ID lựa chọn là bắt buộc"
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
  static validateCreateOption = async (req, res, next) => {
    try {
      const schema = Joi.object({
        text: Joi.string()
          .required()
          .messages({
            "any.required": "Nội dung lựa chọn là bắt buộc"
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
  static validateUpdateOption = async (req, res, next) => {
    try {
      const schema = Joi.object({
        text: Joi.string()
          .required()
          .messages({
            "any.required": "Nội dung lựa chọn là bắt buộc"
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
  static validateRemoveOption = async (req, res, next) => {
    try {
      const schema = Joi.object({
        optionId: Joi.string()
          .hex()
          .length(24)
          .required()
          .messages({
            "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
            "string.length": "ID lựa chọn phải có đúng 24 ký tự",
            "any.required": "ID lựa chọn là bắt buộc"
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
  
  static validateVote = async (req, res, next) => {
    try {
      if (!req.body || !req.body.optionId) {
        return res.status(400).json({
            errors: [
                {
                    field: "optionId",
                    message: "Field optionId need to be provided in the request body"
                }
            ]
        });
      }
      const schema = Joi.object({
        optionId: Joi.string()
          .hex()
          .length(24)
          .required()
          .messages({
            "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
            "string.length": "ID lựa chọn phải có đúng 24 ký tự",
            "any.required": "ID lựa chọn là bắt buộc"
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
  }
}