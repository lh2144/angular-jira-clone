import { IssueType } from '../project';
import { IconType } from 'typings/common';
export class IssueTypeUtil {
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
  public static getIssueTypeIcon(issueType: IssueType): IconType {

    return IssueTypeUtil.issuetypes[issueType];
  }
}
