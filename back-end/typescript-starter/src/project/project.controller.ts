import { Controller, Get } from "@nestjs/common";
import { Project } from "./project";

@Controller('project')
export class ProjectController {
    @Get()
    getProject() {
        return Project;
    }
}