export default {
    project_name: 'Smart Task Board',
    columns: [
        {
            column_id: 1,
            column_title: 'To Do',
            tasks: [
                {
                    task_id: 1,
                    task_title: 'Plan sprint backlog',
                    task_description: 'Outline the work for the next iteration.',
                    sub_tasks: [
                        {
                            sub_task_id: 1,
                            sub_task_title: 'Define user stories',
                            sub_task_description: 'Capture the main stories and acceptance criteria.',
                            sub_task_status: 'incomplete'
                        },
                        {
                            sub_task_id: 2,
                            sub_task_title: 'Prioritize backlog items',
                            sub_task_description: 'Arrange items by urgency and business value.',
                            sub_task_status: 'incomplete'
                        }
                    ]
                },
                {
                    task_id: 2,
                    task_title: 'Review UI updates',
                    task_description: 'Check the latest design changes for consistency.',
                    sub_tasks: [
                        {
                            sub_task_id: 1,
                            sub_task_title: 'Validate button states',
                            sub_task_description: 'Test hover, focus, and disabled states.',
                            sub_task_status: 'incomplete'
                        }
                    ]
                }
            ]
        },
        {
            column_id: 2,
            column_title: 'In Progress',
            tasks: [
                {
                    task_id: 3,
                    task_title: 'Build dashboard layout',
                    task_description: 'Create the main grid and sidebar structure.',
                    sub_tasks: [
                        {
                            sub_task_id: 1,
                            sub_task_title: 'Implement responsive columns',
                            sub_task_description: 'Make the layout adapt to tablet and mobile sizes.',
                            sub_task_status: 'incomplete'
                        },
                        {
                            sub_task_id: 2,
                            sub_task_title: 'Connect navigation links',
                            sub_task_description: 'Add routes to the main app sections.',
                            sub_task_status: 'complete'
                        }
                    ]
                }
            ]
        },
        {
            column_id: 3,
            column_title: 'Review',
            tasks: [
                {
                    task_id: 4,
                    task_title: 'Test authentication flow',
                    task_description: 'Verify login, logout, and protected routes.',
                    sub_tasks: [
                        {
                            sub_task_id: 1,
                            sub_task_title: 'Check error messages',
                            sub_task_description: 'Ensure validation feedback is clear.',
                            sub_task_status: 'complete'
                        }
                    ]
                }
            ]
        },
        {
            column_id: 4,
            column_title: 'Done',
            tasks: [
                {
                    task_id: 5,
                    task_title: 'Set up project skeleton',
                    task_description: 'Initialize the main folders and base components.',
                    sub_tasks: [
                        {
                            sub_task_id: 1,
                            sub_task_title: 'Create starter files',
                            sub_task_description: 'Generate the app shell and placeholder pages.',
                            sub_task_status: 'complete'
                        }
                    ]
                }
            ]
        }
    ]
}