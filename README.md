# HOW TO START THE WEBSITE

*Composer, PHP, and MongoDB are required for this to work!*

## Install Required Packages

```sh
composer install
```

## Run the Python Script to Create the Medications Database

Navigate to the `tests/mongoDB_Tests` directory and run `parseExcel.py`:

```sh
pip install pymongo pandas
python parseExcel.py
```

## Initialize the Local Web Server

1. Navigate to the `public` folder and open Command Line in that directory.
2. Start the server with the following command:

   ```sh
   php -S 0.0.0.0:8000 -t public
   ```

3. Open your browser and go to `localhost:8000`.

## For Inquiries, Contact

| Student Name       | Student Mail                              |
|--------------------|-------------------------------------------|
| Dasun Sri Nethmal  | gddsnethmal@students.nsbm.ac.lk           |
| Ometh Abeyrathne   | mowbabeyrathne@students.nsbm.ac.lk        |
