import { Component } from '@angular/core';
import { ConfigInterface, DownloadModeEnum, TreeModel } from 'ng6-file-man';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7';
  tree: TreeModel;
  constructor(){
     
const treeConfig: ConfigInterface = {
  baseURL: 'http://filemanagerserver.herokuapp.com/',
  api: {
    listFile: 'api/list',
    uploadFile: 'api/upload',
    downloadFile: 'api/download',
    deleteFile: 'api/remove',
    createFolder: 'api/directory',
    renameFile: 'api/rename',
    searchFiles: 'api/search'
  },
  options: {
    allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES, //alternatively DOWNLOAD_DISABLED,DOWNLOAD_ALL
    showFilesInsideTree: false
  }
 
};
this.tree = new TreeModel(treeConfig)
  }
}
