import deleteOldFiles from "../jobs/delete-old-files";

class ManagerCron {
  static run() {
    throw new Error("Method not implemented.");
  }

  private jobs: any[];

  constructor() {
    this.jobs = [deleteOldFiles];
  }

  public run(): void {
    this.jobs.forEach((job) => job.start());
  }
}
export default new ManagerCron();