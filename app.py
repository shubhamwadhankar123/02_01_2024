from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Configuration for file uploads
UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Shubhamw@1234",  # Enter your MySQL password
    database="team_data"
)

# Function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route to display the form
@app.route('/')
def index():
    return render_template('form.html')

# Route to handle form submission
@app.route('/add_member', methods=['POST'])
def add_member():
    if request.method == 'POST':
        name = request.form['name']
        designation = request.form['designation']
        state = request.form['state']
        city = request.form['city']
        year = request.form['year']
        style = request.form['style']
        address = request.form['address']
        mobile = request.form['mobile']
        rating = request.form['rating']

        # Handle the image upload
        file = request.files['image']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # Store the path correctly
            image_path = os.path.join('static/uploads', filename).replace('\\', '/')

            # Debug output to check uploaded image path
            print("Uploaded image path:", os.path.join(app.config['UPLOAD_FOLDER'], filename))
            print("Relative image path stored in database:", image_path)

            # Save data to MySQL
            cursor = db.cursor()
            query = "INSERT INTO team_members (name, designation, state, city, year, style, address, mobile, rating, image_path) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            values = (name, designation, state, city, year, style, address, mobile, rating, image_path)
            cursor.execute(query, values)
            db.commit()
            cursor.close()

            return redirect(url_for('show_team'))

    return "Failed to upload member data"

# Route to display team members
@app.route('/team')
def show_team():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM team_members")
    members = cursor.fetchall()
    cursor.close()

    return render_template('team.html', members=members)

# Route to delete a team member
@app.route('/delete_member/<int:member_id>', methods=['GET'])
def delete_member(member_id):
    cursor = db.cursor()
    query = "DELETE FROM team_members WHERE id = %s"
    cursor.execute(query, (member_id,))
    db.commit()
    cursor.close()

    return redirect(url_for('show_team'))

if __name__ == '__main__':
    app.run(debug=True)
