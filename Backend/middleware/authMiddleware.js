// Middleware to check for admin access
exports.isAdmin = (req, res, next) => {
  
  //admin credentials
  const adminUser = req.headers['admin-username'];
  const adminPass = req.headers['admin-password'];

  // Check if provided credentials match the hardcoded admin values
  if (adminUser === 'techtwirl' && adminPass === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admin rights required.' });
  }
};
