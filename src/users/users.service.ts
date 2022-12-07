
import {User} from "./users.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {createConnection, getConnectionManager} from 'typeorm';
import {connection} from "../db";

const Sequelize = require('sequelize');



@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        return user
    }

    async getAllUsers() {
        await connection.connect();
        const users = await connection.query("SELECT * FROM users")

        //const users = await this.userRepository.findAll({include: {all: true}})
        const { QueryTypes } = require('sequelize');
        //const users = await sequelize.query(`SELECT * FROM 'users'`, { nest: true, type: QueryTypes.SELECT });
        console.log(users);
        return users;
    }
}
