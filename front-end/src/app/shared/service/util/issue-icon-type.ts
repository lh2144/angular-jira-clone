import { IssueType, IssueStatus, IssuePriority } from '../project';
import { IconType } from 'typings/common';
export class IssuesUtil {
  public static issuetypes = {
    Task: {
      class: 'icon-task',
      icon: 'check_circle',
      type: 'Task'
    },
    Story: {
      class: 'icon-story',
      icon: 'bookmark',
      type: 'Story'
    },
    Bug: {
      class: 'icon-bug',
      icon: 'info',
      type: 'Bug'
    }
  };

  public static issuePriority = [
    IssuePriority.LOW,
    IssuePriority.LOWEST,
    IssuePriority.MEDIUM,
    IssuePriority.HIGH,
    IssuePriority.HIGHEST
  ];

  public static issueStatus = [
    IssueStatus.BACKLOG,
    IssueStatus.DONE,
    IssueStatus.IN_PROGRESS,
    IssueStatus.SELECTED
  ];
  public static getIssueTypeIcon(issueType: IssueType): IconType {

    return IssuesUtil.issuetypes[issueType];
  }
}
