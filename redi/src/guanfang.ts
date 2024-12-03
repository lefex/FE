import { Inject, Injector } from "@wendellhu/redi";

interface UserInfo {
  name: string;
}

interface Files {

}

class AuthService {
  public getCurrentUserInfo(): UserInfo {
    // your implementation here...
    return { name: 'John Doe' };
  }
}

class FileListService {
  @Inject(AuthService) private readonly authService: AuthService;
  constructor(
    authService: AuthService
  ) {
    this.authService = authService
    console.log('FileListService initialized');
  }
 
  public getUserFiles(): Promise<Files> {
    const currentUser = this.authService.getCurrentUserInfo();
    return Promise.resolve({
      currentUser
    } as Files);
  }
}

const injector = new Injector([[FileListService], [AuthService]]);

const fileListService = injector.get(FileListService);

