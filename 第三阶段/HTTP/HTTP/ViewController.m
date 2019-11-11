//
//  ViewController.m
//  HTTP
//
//  Created by wsy on 2019/11/10.
//  Copyright © 2019 WSY. All rights reserved.
//

#import "ViewController.h"
#import "NetWorking.h"

@interface ViewController ()
{
    NetWorking *_networking;
}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _networking = [[NetWorking alloc] init];
}

- (void)sendRequest {
//    [_networking afPostTest];
    
    [_networking postTest];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [self sendRequest];
}


@end
