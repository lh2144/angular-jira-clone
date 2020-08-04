import { IssueStatus } from "app/shared/service";

type FilterQuery = {
  searchTerm?: string;
  userId?: string;
  status?: IssueStatus
}
