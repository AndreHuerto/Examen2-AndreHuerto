import { Pool } from 'pg'
export const pool=new Pool({
    host:'ec2-184-73-198-174.compute-1.amazonaws.com',
    user:'gmrnotdmvjlsmq',
    password:'4e3c18baf637546d73e8afde74539449463c9c525ccecb326a35358ce5bc71f6',
    database:'d5992lltrbbdhk',
    port:5432,
    ssl:{rejectUnauthorized:false}
});