import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../errors/CustomErrors.js";

export const getAllContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.status(StatusCodes.OK).json({ contacts });
};
export const getContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;

    const contacts = await Contact.findById(contactID);
    if (!contacts) {
      throw new BadRequest(`Contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json({ contacts });
  } catch (error) {
    next(error);
  }
};
export const deleteContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;

    const contacts = await Contact.findByIdAndRemove(contactID);
    if (!contacts) {
      throw new BadRequest(`Contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json(`Contact with id ${contactID} is deleted`);
  } catch (error) {
    next(error);
  }
};
export const updateContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;
    const contacts = await Contact.findByIdAndUpdate(
      contactID,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!contacts) {
      throw new BadRequest(`Contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json({ contacts });
  } catch (error) {
    next(error);
  }
};
export const createContact = async (req, res, next) => {
  try {
    const newContact = Contact(req.body);
    const contacts = await newContact.save();
    res.status(StatusCodes.CREATED).json({ contacts });
  } catch (error) {
    next(error);
  }
};
