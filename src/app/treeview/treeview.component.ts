import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/treetable';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent implements OnInit {
  files1: any;

  cols: any = [];
  constructor(private nodeservice: NodeService) {}

  ngOnInit(): void {
    this.nodeservice.getFilesystem().then((files) => {
      this.files1 = files;
      
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }

  onKeypressEvent(e: any) {
    const data = e.target.value;
    console.log('dataa', data);
    if (!data.length) {
      this.nodeservice.getFilesystem().then((files) => {
        this.files1 = files;
      });
      return this.files1;
    } else {
      return (this.files1 = this.files1.filter((dataObject: any) =>
        dataObject.data.name.includes(data)
      ));
    }
  }
}
