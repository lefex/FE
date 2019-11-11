//
//  NetWorking.m
//  HTTP
//
//  Created by wsy on 2019/11/10.
//  Copyright © 2019 WSY. All rights reserved.
//

#import "NetWorking.h"
#import "AFNetworking/AFNetworking.h"

static NSString *kUrl = @"http://192.168.8.178:8888/api/fe/list";

@interface NetWorking ()
@property (nonatomic, strong) NSURLSession *session;
@end

@implementation NetWorking

- (instancetype)init
{
    self = [super init];
    if (self) {
        NSURLSessionConfiguration *conf = [NSURLSessionConfiguration defaultSessionConfiguration];
        _session = [NSURLSession sessionWithConfiguration:conf];
    }
    return self;
}

//    Error Domain=NSCocoaErrorDomain Code=3840 "Invalid value around character 0." UserInfo={NSDebugDescription=Invalid value around character 0.}
// @"http://httpbin.org/get"
//    [request setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];

- (void)postTest {
    NSURL *requestUrl = [NSURL URLWithString: @"http://192.168.8.178:8888/api/fe/list"];
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] initWithURL:requestUrl];
    NSURLSessionTask *task = [_session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (!error && data) {
            NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
            NSLog(@"response data: %@", dict);
        }
    }];
    [task resume];
}

- (void)afPostTest {
    NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
    AFURLSessionManager *manager = [[AFURLSessionManager alloc] initWithSessionConfiguration:configuration];
    
    NSURL *URL = [NSURL URLWithString:kUrl];
    NSURLRequest *request = [NSURLRequest requestWithURL:URL];
    
    NSURLSessionDataTask *dataTask = [manager dataTaskWithRequest:request completionHandler:^(NSURLResponse *response, id responseObject, NSError *error) {
        if (error) {
            NSLog(@"Error: %@", error);
        } else {
            NSLog(@"%@ %@", response, responseObject);
        }
    }];
    [dataTask resume];
}

- (void)get {
    
}

@end
