const upload = require("../helpers/uploader");
const util = require("util");

exports.index = (req, res) => {
    return res.render('index', { message: req.flash() });
}

exports.uploadSingle = (req, res) => {
    if (req.file) {
        console.log(req.file)

        req.flash('success', 'File Uploaded.');
    }
    return res.redirect('/');
}

exports.uploadMultiple = (req, res) => {
    if (req.files.length) {
        console.log(req.files)

        req.flash('success', 'Files Uploaded.');
    }
    return res.redirect('/');
}

exports.uploadSingleV2 = async (req, res) => {
    const uploadFile = util.promisify(upload.single('file'));
    try {
        await uploadFile(req, res);
        console.log(req.file)
        
        req.flash('success', 'File Uploaded.');
    } catch (error) {
        console.log(error)
    }
    return res.redirect('/');
}