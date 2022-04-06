SET client_encoding TO 'UTF-8';

create table person(
	id serial primary key,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(255)
);

create table post(
	id serial primary key,
	title varchar(255),
	content text,
	user_id integer references person(id)
);