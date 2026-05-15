const User = require('./model');

const getUsers = (req, res, next) => {
	User.find()
		.then(response => {
			res.json({
				response
			});
		})
		.catch(error => {
			res.status(500).json({
				message: 'An error occurred',
				error: error.message
			});
		});
};

const adduser = (req, res, next) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		role: req.body.role || 'User',
		phone: req.body.phone || '',
		notes: req.body.notes || ''
	});

	user.save()
		.then(response => {
			res.json({
				response
			});
		})
		.catch(error => {
			res.status(500).json({
				message: 'An error occurred',
				error: error.message
			});
		});
};

const updateUser = (req, res, next) => {
	const id = req.params.id;
	const updateData = {
		name: req.body.name,
		email: req.body.email,
		role: req.body.role || 'User',
		phone: req.body.phone || '',
		notes: req.body.notes || ''
	};

	User.findByIdAndUpdate(id, { $set: updateData }, { new: true })
		.then(response => {
			res.json({
				response
			});
		})
		.catch(error => {
			res.status(500).json({
				message: 'An error occurred',
				error: error.message
			});
		});
};

const deleteUser = (req, res, next) => {
	const id = req.params.id;

	User.findByIdAndDelete(id)
		.then(response => {
			res.json({
				response
			});
		})
		.catch(error => {
			res.status(500).json({
				message: 'An error occurred',
				error: error.message
			});
		});
};

exports.getUsers = getUsers;
exports.adduser = adduser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;