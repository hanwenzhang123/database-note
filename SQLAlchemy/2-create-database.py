from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

engine = create_engie('sqlite:///users.db', echo = True)    #create a user.db
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

