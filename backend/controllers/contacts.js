import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";

export const getAllContacts = async (req, res, next) => {
  const allContacts = await Contact.find({});
  res.status(StatusCodes.OK).json({ allContacts });
};
export const getContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;

    const contact = await Contact.findById(contactID);
    if (!contact) {
      throw new Error(`contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json({ contact });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const deleteContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;

    const contact = await Contact.findByIdAndRemove(contactID);
    if (!contact) {
      throw new Error(`contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json(`contact with id ${contactID} is deleted`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const updateContact = async (req, res, next) => {
  try {
    const { id: contactID } = req.params;
    const contact = await Contact.findByIdAndUpdate(
      contactID,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!contact) {
      throw new Error(`contact does not exist with id ${contactID}`);
    }
    res.status(StatusCodes.OK).json({ contact });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const createContact = async (req, res, next) => {
  try {
    const newContact = Contact(req.body);
    const contact = await newContact.save();
    res.status(StatusCodes.OK).json({ contact });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
