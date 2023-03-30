const mongoose = require("mongoose");
const Joi = require("joi");
const { boolean } = require("joi");

const socialsSchema = new mongoose.Schema({
  linkedIn: {
    type: String,
  },
  gitHub: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  website: {
    type: String,
  },
});

const professionalSchema = new mongoose.Schema({
  education: {
    type: String,
  },
  currently: {
    type: String,
  },
});

const interestsSchema = new mongoose.Schema({
    appDev: {
        type: Boolean,
        default: false,
    },
    webDev: {
        type: Boolean,
        default: false,
    },
    gameDev: {
        type: Boolean,
        default: false,
    },
    dsa: {
        type: Boolean,
        default: false,
    },
    programming: {
        type: Boolean,
        default: false,
    },
    machineLearning: {
        type: Boolean,
        default: false,
    },
    dataScience: {
        type: Boolean,
        default: false,
    },
    others: {
        type: Boolean,
        default: false,
    }
})

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  aboutMe: {
    type: String,
  },
  socials: {
    type: socialsSchema,
  },
  professionalInfo: {
    type: professionalSchema,
  },
  followers: {
    type: Array,
  },
  isFollowing: {
    type: Boolean,
  },
  interests: {
    type: interestsSchema,
  },
});

const validateUser = (user) => {
    const schema = Joi.object({
        first_name: Joi.string().min(3).max(30).required(),
        last_name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
        image: Joi.string(),
        aboutMe: Joi.string(),
        socials: Joi.object({
            linkedIn: Joi.string(),
            gitHub: Joi.string(),
            twitter: Joi.string(),
            instagram: Joi.string(),
            facebook: Joi.string(),
            website: Joi.string(),
        }),
        professionalInfo: Joi.object({
            education: Joi.string(),
            currently: Joi.string(),
        }),
        isFollowing: Joi.boolean(),
        followers: Joi.array(),
        interests: Joi.object({
            appDev: Joi.boolean(),
            webDev: Joi.boolean(),
            gameDev: Joi.boolean(),
            dsa: Joi.boolean(),
            programming: Joi.boolean(),
            machineLearning: Joi.boolean(),
            dataScience: Joi.boolean(),
            others: Joi.boolean(),
        })

    });
    return schema.validate(user);
  };

module.exports = {
    User: mongoose.model("user", userSchema),
    validateUser,
};
