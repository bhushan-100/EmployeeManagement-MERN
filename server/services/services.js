const axios = require('axios');
console.log('in services')
exports.add_user = (req, res) => {

    res.send('routing to create');
}

exports.update_user = (req, res) => {

    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err)
        })
    //res.render('update_user');
}

exports.list = (req, res) => {

    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            console.log(response)
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
}

router.get('/search', async (req, res) => {
    const searchQuery = req.query.q; // Get the search query from the request query parameters
  
    try {
      // Use a regular expression with case-insensitive search to find employees by name
      const employees = await Employee.find({
        name: { $regex: searchQuery, $options: 'i' }, // 'i' for case-insensitive search
      });
  
      res.json(employees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports=router;
  