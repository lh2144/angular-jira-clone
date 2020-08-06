import { IssueType } from '../project';
import { IconType } from 'typings/common';

export function getIssueTypeIcon(issueType: IssueType): IconType {
  const types = {
    Task: {
      class: 'icon-task',
      icon: 'check_circle'
    },
    Story: {
      class: 'icon-story',
      icon: 'bookmark'
    },
    Bug: {
      class: 'icon-bug',
      icon: 'info'
    }
  };
  return types[issueType];
}
