
-- join template 
SELECT table1.col1 AS rename, table2.col2
FROM table2
LEFT JOIN table1
ON table2.col2(a) = table1.col1
ORDER BY table1.col1;