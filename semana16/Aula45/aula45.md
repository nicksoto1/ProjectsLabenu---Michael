1) a. Remove na tabela Actor a coluna salary

b. Modifica na tabela Actor o gender por sex com VARCHAR(255)

c.Não modifica já que o nome é o mesmo com VARCHAR(255)

d.ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2)a. UPDATE Actor
SET
 name = "Moacyr Franco"
birth_date = '1972-08-30'
WHERE id = "003";

b. UPDATE Actor
SET 
name = "JULIANA PAES";
WHERE name ="Juliana Paes";

UPDATE Actor
SET 
name = "Juliana Paes";
WHERE name ="JULIANA PAES";

c. UPDATE Actor
SET 
name = "Moacyr Franco",
salary= 800000,
birth_date= "1992-04-25",
gender= "male"
WHERE id = "005";

d.  UPDATE Actor
SET 
  comida = "uva"
WHERE id = 300;

Código de erro: 1054. Coluna desconhecida 'comida' na 'lista de campos'

3) a. DELETE FROM Actor
WHERE name = "Fernanda Montenegro";

b. DELETE FROM Actor
WHERE gender = "male" AND
salary > 1000000;

4)a. SELECT MAX(salary)
FROM Actor;

b.SELECT MIN(salary)
FROM Actor
WHERE gender = "female";

c.SELECT COUNT(*) 
FROM Actor
WHERE gender = "female";

d. SELECT SUM (salary)
FROM Actor;

5) a. Le a quantidade de genero

b. SELECT id, name
FROM Actor
ORDER BY name DESC;

c.  SELECT *
FROM Actor
ORDER BY salary;

d. SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;

<!-- Retorna a media de salario por gênero -->
e. SELECT AVG(salary), gender  
FROM Actor
GROUP BY gender;

6) a. ALTER TABLE Movie
ADD playing_limit_date DATE;

<!-- CHANGE = mudança -->
b.  ALTER TABLE Movie
CHANGE rating rating FLOAT ; 

c. UPDATE Movie
SET 
 playing_limit_date = "2020-05-20"
WHERE id = 011;
UPDATE Movie
SET 
 playing_limit_date = "1992-05-20"
WHERE id = 012;

d. DELETE FROM Movie
WHERE id = 004;

