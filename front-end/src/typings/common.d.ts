import { IssueStatus } from "app/shared/service";

type FilterQuery = {
  searchTerm?: string;
  userId?: string;
  status?: IssueStatus
}

type IconType = {
  class: string;
  icon: string;
  type: string;
}
