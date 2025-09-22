type ManageNotesIdTypeNameType = 'Add Section' | 'Add Sub Section' | 'Add Content' | 'Edit Section' | 'Edit Sub Section' | 'Edit Content' | 'Add Bulk Content';
export type ManageNotesIdType = 'Add_Section' | 'Add_Sub_Section' | 'Add_Content' | 'Edit_Section' | 'Edit_Sub_Section' | 'Edit_Content' | 'Add_Bulk_Content';
type ManageNotesActionType = 'Section' | 'Sub_Section' | 'Content';

export interface IManageNotesAction {
    name: ManageNotesIdTypeNameType;
    type: ManageNotesActionType;
    id: ManageNotesIdType;
}