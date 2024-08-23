export default interface socketTypes {
  on(event: string, callback: (data: any) => void );
  emit(event: string, data: any);
  join(room: string)
}