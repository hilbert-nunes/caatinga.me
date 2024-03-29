create sequence hibernate_sequence start 1 increment 1;

    create table tb_image (
       id int8 generated by default as identity,
        name varchar(255),
        pic_byte oid,
        type varchar(255),
        primary key (id)
    );

    create table tb_reference (
       id int8 generated by default as identity,
        name varchar(255) not null,
        primary key (id)
    );

    create table tb_role (
       id int8 not null,
        name varchar(255),
        primary key (id)
    );

    create table tb_tree (
       id int8 generated by default as identity,
        botanical_name text not null,
        cultural_importance text,
        ecological_info text,
        family text not null,
        general_description text not null,
        management_guide text,
        name_meaning text,
        phenological_info text,
        popular_name text,
        propagation text,
        single_name text not null,
        special_description text,
        utilities text,
        where_occurs text,
        primary key (id)
    );

    create table tb_users (
       id int8 not null,
        name varchar(255),
        password varchar(255),
        username varchar(255),
        primary key (id)
    );

    create table tb_users_roles (
       app_user_id int8 not null,
        roles_id int8 not null
    );

    create table tree_reference (
       tree_id int8 not null,
        reference_id int8 not null,
        primary key (tree_id, reference_id)
    );

    alter table if exists tb_tree 
       add constraint UK_b1a39qbgrk9un4q1sipr1fgs3 unique (single_name);

    alter table if exists tb_users_roles 
       add constraint FK2xk9iuhi1faf7fg5qc1gi2e6a 
       foreign key (roles_id) 
       references tb_role;

    alter table if exists tb_users_roles 
       add constraint FK15kdxdgr6c8rfscrmjgmj9is5 
       foreign key (app_user_id) 
       references tb_users;

    alter table if exists tree_reference 
       add constraint FKs35ho6i6mpfp2oiii3qnmjxh4 
       foreign key (reference_id) 
       references tb_reference;

    alter table if exists tree_reference 
       add constraint FKn2npva89m1jdygmn8eoi9i220 
       foreign key (tree_id) 
       references tb_tree;
