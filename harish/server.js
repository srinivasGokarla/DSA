const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const  authRoutes = require('./src/routes/userRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5850;

app.use(cors());
app.use(express.json());

app.use('/', authRoutes);



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
Task is to create a Multi-Level Marketing API using Node.js, following the provided specifications:
Total Levels= 8
Level 0
Level 1
Level 2
.
.
.
Level 8
If Level 8 User is Earning 1000 Rs, then 40% of 1000 Rs should be distributed among all above Users
Parent of Level 8 i.e, Level 7 will get 20%
Grand Parent of Level 8 i.e, Level 6 will get 10%
Great Grand Parent of Level 8 i.e, Level 5 will get 5%
Rest of all will get 1% each (Level 4 + Level 3 + Level 2 + Level 1 + Level0 = 5%)
Total Distribution= 40%
Check conditions:
If Level 2 earning 1000 Rs, then 20% will be distributed to Level 1 and 10% will be distributed Level 0.
Your solution should include the following endpoints:
/users: Create a new user with a name and optionally assign a parent user.
/distribute: Distribute earnings based on the specified rules.
Please ensure that your code is well-structured, follows best practices, and includes appropriate error handling and validation. Additionally, we encourage you to add any additional features or enhancements you think would be beneficial for the API.
Store all data in the database where user and parent IDs are stored. So, if the API responsible for distributing the amount does take user ID and parent ID as parameters, show how the amount being distributed according to which user and parent?
To submit the assignment, please create a GitHub repository and share the link with us. Ensure that the repository includes a README file with instructions on how to run and test your API.
We understand that this assignment may require some time and effort, but we believe it will showcase your skills and commitment to the role. If you have any questions or need further clarification, please feel free to reach out to us.
*/
