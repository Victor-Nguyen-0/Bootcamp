from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import friendship

class User:
    db = "friendships_schema"
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name) VALUES (%(first_name)s, %(last_name)s);"
        return connectToMySQL(cls.db).query_db(query, data)
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        results = connectToMySQL(cls.db).query_db(query)
        all_users = []
        for row in results:
            all_users.append(cls(row))
        return all_users