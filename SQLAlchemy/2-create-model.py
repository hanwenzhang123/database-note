#echo = True adds info to console when it runs
#echo = False - clear up the console, it will remove additional messages when running the file

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///users.db', echo = False)    #create a local user.db
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()   #base here itself is a class so we capitalize

class User(Base):
  __tablename__ = 'users'
                            #here we create table
  id = Column(Integer, primary_key = True)
  name = Column(String)
  fullname = Column(String)
  nickname = Column(String)
  
  def __repr__(self):         #return the full user information
    return f'<User(name={self.name}, fullname={self.fullname}, nickname={self.nickname})>'
  
  
  if__name__ = '__main__':
    Base.metadata.create_all(engine)    #connect engine with model classs to create database table

#     meg_user = User(name='Hanwen', fullname='Hanwen Zhang', nickname='Helen')
#     print(meg_user.name)
#     print(meg_user.id)  #none
#     session.add(meg_user)
#     session.commit()    #this commit add our list to the database
#     print(session.id)
    
    session.add([User(name='Grace', fullname='Grace Hopper', nickname='Pioneer'), 
                User(name='Alan', fullname='Alan Turing', nickname='Computer Scientist'),  
                User(name='Katherine', fullname='Katherine Johnson', nickname='') ]   #this can be a variable instead
    session.commit()
                
    for user in new_users:
         print(user.id)
                
# in the shell
sqlite 3 user
                
    
#exercise 
# First, import create_engine and declarative_base correctly from SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

#Create a variable called engine and set it equal to create_engine. 
#Use create_engine to create a SQLite database called movies.db and set echo to False. 
#Next, create a variable named Base and set it equal to declarative_base. Then create the model class. 
#It should be called Movie, and it takes Base as an argument (it inherits from Base). 
#Inside of the class, set the __tablename__ to ’movies’.
engine = create_engine('sqlite:///movies.db', echo = False) 
Base = declarative_base()

class Movie(Base):
    __tablename__ = ’movies’
                

    
    
