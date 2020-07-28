import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';

@Module({
    imports: [],
    controllers: [AppController, ProjectController],
    providers: [AppService],
})
export class AppModule { }
