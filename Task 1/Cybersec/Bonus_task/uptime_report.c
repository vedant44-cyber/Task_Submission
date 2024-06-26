#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/jiffies.h>
MODULE_LICENSE("GPL");  
MODULE_AUTHOR("Vedant");
MODULE_DESCRIPTION("A simple Linux module to report system uptime.");
MODULE_VERSION("1.0");
static int __init uptime_report_init(void) {
    unsigned long uptime_seconds = jiffies / HZ;
    printk(KERN_INFO "uptime_report: Module has been succesfully loaded. System uptime: %lu seconds\n", uptime_seconds);
    return 0;
}

static void __exit uptime_report_exit(void) {
    printk(KERN_INFO "uptime_report: Module has been succesfully unloaded.\n");
}

module_init(uptime_report_init);
module_exit(uptime_report_exit);
