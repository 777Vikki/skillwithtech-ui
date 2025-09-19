type NameType = 'Add Section' | 'Add Sub Section' | 'Add Content' | 'Edit Section' | 'Edit Sub Section' | 'Edit Content';
type IdType = 'Add_Section' | 'Add_Sub_Section' | 'Add_Content' | 'Edit_Section' | 'Edit_Sub_Section' | 'Add_Sub_Section_On_Section' | 'Edit_Content';
type ActionType = 'Section' | 'Sub_Section' | 'Content';

export interface IManageNotesAction {
    name: NameType;
    type: ActionType;
    id: IdType;
}