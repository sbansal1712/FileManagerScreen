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
  baseURL: 'http://localhost:8080/',
  api: {
    listFile: 'api/file/list',
    uploadFile: 'api/file/upload',
    downloadFile: 'api/file/download',
    deleteFile: 'api/file/remove',
    createFolder: 'api/file/directory',
    renameFile: 'api/file/rename',
    searchFiles: 'api/file/search'
  },
  options: {
    allowFolderDownload: DownloadModeEnum.DOWNLOAD_FILES, //alternatively DOWNLOAD_DISABLED,DOWNLOAD_ALL
    showFilesInsideTree: false
  }
 
};
this.tree = new TreeModel(treeConfig)
  }
}
