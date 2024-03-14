const expressAsyncHandler = require("express-async-handler");
const Headerschema = require("../models/headerSchema");
const fs = require("fs");
const headerpost = expressAsyncHandler(async (req, res) => {
    try {
        const adminData = JSON?.parse(req?.body?.adminData);
        const logo = req?.files?.logo && req?.files?.logo[0]?.filename;

        if (adminData?.adminID) {
            const findAdmin = await Headerschema.findOne({
                adminID: adminData.adminID,
            });

            if (findAdmin) {
                const img = findAdmin.logo;

                console.log(img, "test");

                function deleteFiles(thumbnails, text) {
                    fs.unlink(`./logo/${thumbnails}`, (err) => {
                        if (err) {
                            console.error(`Error deleting ${thumbnails}: typr${text}`, err);
                        } else {
                            console.log(
                                `${thumbnails}:type${text} deleted successfully...by api`
                            );
                        }
                    });
                }
                if (img) {
                    deleteFiles(img, "logo");
                }

                const updatedData = await Headerschema.findOneAndUpdate(
                    { adminID: adminData.adminID },
                    {
                        heading: adminData.heading,
                        heading1: adminData.heading1,
                        Email: adminData.Email,
                        logo: logo,
                        sitename: adminData.sitename,
                    },
                    { new: true }
                );

                res.status(200).send({ data: updatedData, success: true });
            } else {
                const newHeader = new Headerschema({
                    adminID: adminData.adminID,
                    heading: adminData.heading,
                    heading1: adminData.heading1,
                    Email: adminData.Email,
                    logo: logo,
                    sitename: adminData.sitename,
                });

                await newHeader.save();
                res.status(200).send({ data: newHeader, success: true });
            }
        } else {
            res.status(400).send({ msg: "No admin ID given", success: false });
        }
    } catch (error) {
        res.status(500).send({ error: error.message, success: false });
    }
});
const Getheader = expressAsyncHandler(async (req, res) => {
    console.log("first");
    try {
        const { adminID } = req.body;
        console.log("first");

        if (adminID) {
            console.log("first");

            const findAdmin = await Headerschema.findOne({
                adminID: adminID,
            });
            console.log(findAdmin, "tests");
            if (!findAdmin) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).send({ data: findAdmin, success: true });
        } else {
            res.status(201).send({ msg: "no data found", success: false });
        }
    } catch (error) {
        res.status(500).send({ error: error, success: false });
    }
});

const headerdelete = expressAsyncHandler(async (req, res) => {
    try {
        console.log("first");
        const { tableid } = req.body;
        console.log("first");

        if (tableid) {
            console.log("1");

            const data = await Headerschema.findById(tableid);
            if (data.logo) {
                const img = data.logo;
                console.log("2");

                function deleteFiles(thumbnails, text) {
                    fs.unlink(`./logo/${thumbnails}`, (err) => {
                        if (err) {
                            console.error(`Error deleting ${thumbnails}: typr${text}`, err);
                        } else {
                            console.log(
                                `${thumbnails}:type${text} deleted successfully...by api`
                            );
                        }
                    });
                }
                if (img) {
                    deleteFiles(img, "logo");
                    console.log("3");
                }
            }
            console.log("4");

            const deletedata = await Headerschema.findByIdAndDelete(tableid);

            res.status(200).json({ deletedata, success: true });
        } else {
        }
    } catch (error) {
        res.status(500).send({ error: error, success: false });
    }
});

module.exports = { headerpost, Getheader, headerdelete };
