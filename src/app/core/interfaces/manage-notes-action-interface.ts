type NameType = 'Add Section' | 'Add Sub Section' | 'Add Content' | 'Edit Section';
type IdType = 'Add_Section' | 'Add_Sub_Section' | 'Add_Content' | 'Edit_Section';
type ActionType = 'Section' | 'Sub_Section' | 'Content';

export interface IManageNotesAction {
    name: NameType;
    type: ActionType;
    id: IdType;
}