SELECT *
FROM pg_Indexes
WHERE tablename = 'products';


pg_Indexes is a built-in view in PostgreSQL. Different database servers have different ways to see their indexes.

Indexing allows you to organize your database structure in such a way that it makes finding specific records much faster. 
By default it divides the possible matching records in half, then half, then half, and so on until the specific match you are searching for is found. 
This is known as a Binary Tree, or B-Tree.


EXPLAIN ANALYZE SELECT *
FROM customers;
Rather than returning the results of the query, it will return information about the query.


CREATE INDEX keywords can be used to create an index on a column of a table
CREATE INDEX <index_name> ON <table_name> (<column_name>);

CREATE INDEX customers_user_name_idx ON customers (user_name);
create an index called customers_user_name_idx on the customers table on the user_name column

CREATE INDEX customers_city_idx ON customers(city);
Create an index called customers_city_idx on the customers table for the city column.


Multicolumn Indexes
Create an index called customers_last_name_first_name_idx for the customers table for the combination of last_name and first_name
CREATE INDEX customers_last_name_first_name_idx ON customers (last_name, first_name);


Drop an Index
DROP INDEX IF EXISTS customers_city_idx;


To see the size of a database table you can run the script
SELECT pg_size_pretty (pg_total_relation_size('<table_name>'));


Some of the benefits and burdens of indexes:
Increase in speed of searches/filtering
Increase in storage space
Increase in runtime for Insert/Update/Delete on impacted indexes.
 
