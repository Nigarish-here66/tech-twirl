exports.isAdmin = (req, res, next) => {
  const adminUser = req.headers['admin-username'];
  const adminPass = req.headers['admin-password'];

  if (adminUser === 'techtwirl' && adminPass === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admin rights required.' });
  }
};